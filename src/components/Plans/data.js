import upi from "../../../src/app/assets/images/upi.png";
import payTm from "../../../src/app/assets/images/paytm.png";
import visa from "../../../src/app/assets/images/visa.png";
import masterCard from "../../../src/app/assets/images/mastercard.png";
import amex from "../../../src/app/assets/images/amex.png";
import dinersClub from "../../../src/app/assets/images/diners.png";
import check from "../../../src/app/assets/images/check.png";

export const paymentIcons = [
    {
        icon: upi
    },
    {
        icon: payTm
    },
    {
        icon: visa
    },
    {
        icon: masterCard
    },
    {
        icon: amex
    },
    {
        icon: dinersClub
    }
]
    

export const pricingList = [
    {
        planName: "Mini",
        price: "₹7",
        priceText: false,
        accounts: 1,
        accountsText: "account on mobile only",
        features: [
            "Ad-free music listening on mobile",
            "Group Session",
            "Download 30 songs on 1 mobile device"
        ],
        terms: false
    },
    {
        free: "1month free",
        planName: "Individual",
        price: "₹119",
        priceText: true,
        accounts: 1,
        accountsText: "account",
        features: [
            "Ad-free music listening",
            "Group Session",
            "Download 10k songs/device on 5 devices"
        ],
        terms: true
    },
    {
        free: "1month free",
        planName: "Mini",
        price: "₹149",
        priceText: true,
        accounts: 2,
        accountsText: "accounts",
        features: [
            "For couples who live together",
            "Ad-free music listening",
            "Group Session",
            "Download 10k songs/device, on 5 devices per account"
        ],
        terms: true
    },
    {
        free: "1month free",
        planName: "Mini",
        price: "₹179",
        priceText: true,
        accounts: 6,
        accountsText: "accounts",
        features: [
            "For family who live together",
            "Block explicit music",
            "Ad-free music listening",
            "Group Session",
            "Download 10k songs/device on 5 devices"
        ],
        terms: true
    }

]
