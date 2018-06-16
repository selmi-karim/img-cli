
const got = require('got')
const imageType = require('image-type')
const isUrl = require('is-url-superb')

 const imageBuffer = async(url) => {
    if (!(url && isUrl(url))) throw new TypeError('A valid url is required')

    const response = await got(url, { encoding: null })
    const buffer = Buffer.from(response.body, 'binary')
    const type = imageType(buffer)

    if (!type) return null
    return buffer
}

module.exports = {  imageBuffer };
