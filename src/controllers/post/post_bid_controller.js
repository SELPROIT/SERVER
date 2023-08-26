const { Auction_bid, Auction, Invert_auction, User } = require("../../db");


const createAuctionBid = (auction_id, proposed_price, total, invert, user_id) => {
    return new Promise((resolve, reject) => {
        if (!auction_id || !proposed_price || !total || !user_id) {
            reject(new Error("Faltan completar campos."));
            return;
        }

        User.findByPk(user_id)
            .then(user => {
                if (!user) {
                    reject(new Error("Usuario no encontrado."));
                    return;
                }

                Auction_bid.create({
                    proposed_price,
                    total,
                    UserId: user_id  // Assign the User ID to the bid
                })
                    .then(newAuctionBid => {
                        let auctionPromise = null;

                        if (invert) {
                            Invert_auction.findByPk(auction_id)
                                .then(invertAuction => {
                                    if (!invertAuction) {
                                        reject(new Error(`No se encontró esa subasta inversa.`));
                                        return;
                                    }

                                    invertAuction.addAuction_bid(newAuctionBid)
                                        .then(() => {
                                            resolve(true);
                                        })
                                        .catch(error => {
                                            reject(new Error(`Error añadiendo oferta a subasta inversa: ${error.message}`));
                                        });
                                })
                                .catch(error => {
                                    reject(new Error(`Error encontrando subasta inversa: ${error.message}`));
                                });
                        } else {
                            Auction.findByPk(auction_id)
                                .then(auction => {
                                    if (!auction) {
                                        reject(new Error(`No se encontró esa subasta.`));
                                        return;
                                    }

                                    auction.addAuction_bid(newAuctionBid)
                                        .then(() => {
                                            resolve(true);
                                        })
                                        .catch(error => {
                                            reject(new Error(`Error añadiendo oferta a subasta: ${error.message}`));
                                        });
                                })
                                .catch(error => {
                                    reject(new Error(`Error encontrando subasta: ${error.message}`));
                                });
                        }
                    })
                    .catch(error => {
                        reject(new Error(`Error creando oferta de subasta: ${error.message}`));
                    });
            })
            .catch(error => {
                reject(new Error(`Error encontrando usuario: ${error.message}`));
            });
    });
};

module.exports = {
    createAuctionBid
};
