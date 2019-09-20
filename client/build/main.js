function walletWeight(wallet){
    return ((wallet.plat + wallet.gold + wallet.elec + wallet.silv + wallet.copp)/50);
}

function walletTotal(wallet) {
    return ((wallet.plat * 10) + wallet.gold + (wallet.elec * .5) + (wallet.silv *.1) + (wallet.copp *.01));
}