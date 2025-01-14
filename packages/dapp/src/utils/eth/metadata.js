/**
 * generates metadata to be uploaded
 * @param {string} tokenid current token id from the contract
 * @param {string} image url of the uploaded image
 * @param {number} length number of characters in highlighted text
 * @returns metadata for the tokenid
 */
export const generate = (tokenid, image, length) => {
  if (!tokenid || !length || !image) return; // invlaid
  return {
    name: `Signature NFT #${tokenid}`,
    description: `A unique sign of the time, selected by 0xdeadbeef, to represent increasingly significant money in this infinite game we are playing together. As you consider these unique symbols, remember that wealth truly means having enough to share.`,
    attributes: [
      {
        "trait_type": "Pattern",
        "value": "Phyllotaxis"
      },
      {
        "trait_type": "Attribute",
        "value": "Signed"
      },
      {
        "trait_type": "Attribute",
        "value": "Sealed"
      },
      {
        "trait_type": "Attribute",
        "value": "Delivered"
      },
      {
        "trait_type": "Lucky Number",
        "value": `${tokenid}`
      },
      {
        "trait_type": "Characters",
        "value": `${length}`
      },
    ],
    external_url: "https://sign.kernel.community", // constant
    image // url
  }
}
