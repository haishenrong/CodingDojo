import NodeRSA from "node-rsa";
import fetch from "node-fetch";

const keyData = {
    consumerId: "af4d3436-0c76-4456-8133-ac1713dcb60c",
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIIEpAIBAAKCAQEA0kXFAFYm3jIibv1yOt276yK7ASOxfWME42atCvRYxFwK/kNx
    2olEKJtBxkvxoZJ4Kw+RlM9lIPF4lMJavRU+HMzJwpsgzKujViFzxvB6+vpejtKA
    zBJJgp5OhSUpYtVF+4hJBWGneXSiD7J6ypJ2qu9au3wqbX6gAFt0fSJRk2WLsjIG
    2eAq+fcBdd4X3bzhblIZcUobDk1FHGQ3eyA+v7MJMNUuF/vMnnBvTXBUHN5bBMdI
    v8LcjjDViesVizR1LiDise1M0cKxPlx9IGDhFMu6jRlLJp8itGtxxcNL4VYAAaG/
    JnUFHIqnnwXGnWXZlo8jbQnjN0aB1Xm1g44w9QIDAQABAoIBAQCXOjKLIWrm1yvI
    o2MqTxq968aO9TrLsRFs8wV1IXNOFdyaLauOvrZUdgUCNtBbodnnLlVHrzlOThyo
    8HcOEl8Pm4FoAuW+DZt1cK2x4HayVqr3ERIssuJHnM9gFvAC8txYIRZTVn56bZW4
    sGZ7lobePTMGMDDbevxcBWpsLOh6lnnQOHAfZDBZpYHyNDTXQgE8Qm0hTBSU9Qs5
    Es1jO2BAK3HUyelaO370vwNnUm6JqXHfy/FeYPdbbTXl9RBgBbnBGlMS8HdPDGYU
    nnjju+oJpWKXtd4Sc406DEJe4jgSagcw52v0DeSIyMPiTaSJr53y0jEnK27sdW0s
    SCRzlkJBAoGBAO+mB6v8deHvVx9pKdbYszaZcssVYiLXWHYgh/4KkAIksYdj6pfO
    wNulyEiRQpLPFhCbNB8zwk28boYVLZDI6T1HnO3aoL2aEQR/ckHuHQGHIqc87mvt
    74TM2GM95aMkmZzp8SedZUJQcsBFUh07tVDLlzKCd+dhB5l19F1KCwQpAoGBAOCe
    oAn7iR1rAnPvwRwUJ2rcJvANDveXAX7AbjoJdj7HzhrgJ87j+ZME2xMX9Ufskplg
    icKAh4cYCYpY0W2SedTJAE+fyFaEZZNoliVqZh/aDLpitR8+f+NaBq0vMNyf6q+S
    RX4QudsdcpISpBR9romge+PJbNU+FHKXTeXPU3/tAoGAQGbR8Porg8gaFarhP4eE
    wcuC+eiJMuvELhqX8UFNagYKX2QOizVYxq5KoJXI2kMkntnWq/vw34sf+JCAakRT
    ydAQ8Cqsv8dDg33saqNe0CZMvby2JfMPRxT1odXkfG89iNmloQu/Ro7wB5OZeZmu
    JERSIZTGPDvrGuaEAP4A7+ECgYASe9stlx5cZl7oTXV1qw7nU0B9BoYRx8JevNUV
    P4wUdHq4aXO9KbNy7rZcZt9PUN9rca9EazE747V9RfvN6XzPDs9QvhRNUk3NiJC6
    eXv36QidGdxPuuPpQJJGFBkQPrSgSAgh7JxutIimDpSj/weq2aL4Rq4HCjnCiELn
    w1zarQKBgQDSzTIRPQhTSe538epHh03IZmw2YKKD4eqG/qpePOevZrA9uHmOOG7Y
    MeLldEDDtXBnqOr0uXPqHnfhVRE2pLrmtAxU3KQa/QMVKK8LgwsLdLmBBisPXwec
    XJUjF0qenBHcTbJe8uBJecACk2dbruefcu2wrNDzHeDmt8IFzEG3+g==
    -----END RSA PRIVATE KEY-----`,
    keyVer: 3,
    impactId: "YOUR IMPACT AFFILIATE ID" // not required
}
    
console.log(Date.now().toString())
const generateWalmartHeaders = () => {
    const { privateKey, consumerId, keyVer } = keyData;
    const hashList = {
        "WM_CONSUMER.ID": consumerId,
        "WM_CONSUMER.INTIMESTAMP": Date.now().toString(),
        "WM_SEC.KEY_VERSION": keyVer,
    };

    const sortedHashString = `${hashList["WM_CONSUMER.ID"]}\n${hashList["WM_CONSUMER.INTIMESTAMP"]}\n${hashList["WM_SEC.KEY_VERSION"]}\n`;
    const signer = new NodeRSA(privateKey,'pkcs1');
    const signature = signer.sign(sortedHashString);
    console.log(signature)
    const signature_enc = signature.toString("base64");
    console.log(signature_enc)

    return {
        "WM_SEC.AUTH_SIGNATURE": signature_enc,
        "WM_CONSUMER.INTIMESTAMP": hashList["WM_CONSUMER.INTIMESTAMP"],
        "WM_CONSUMER.ID": hashList["WM_CONSUMER.ID"],
        "WM_SEC.KEY_VERSION": hashList["WM_SEC.KEY_VERSION"],
    };
};

export const getProductById = async (productId) => {
    const options = {
        method: "GET",
        headers: generateWalmartHeaders(),
    };

    const res = await fetch(
        `https://developer.api.walmart.com/api-proxy/service/affil/product/v2/items/${productId}`,
        options
    ).then(
        res => res.json()
    ).then(
        data => console.log(data)
    ).catch((error) => {
        console.error('Error:', error);
    });

    return res
};

export const search = async (searchTerm, brand) => {
    const options = {
        method: "GET",
        headers: generateWalmartHeaders(),
    };

    const res = await fetch(
        `https://developer.api.walmart.com/api-proxy/service/affil/product/v2/search?query=${searchTerm}&facet=on&facet.filter=brand:${brand}`,
        options
    ).then(
        res => res.json()
    ).then(
        data => console.log(data)
    ).catch((error) => {
        console.error('Error:', error);
    });

    return res
};
export const reviews = async (itemId) => {
    const options = {
        method: "GET",
        headers: generateWalmartHeaders(),
    };

    const res = await fetch(
        `https://developer.api.walmart.com/api-proxy/service/affil/product/v2/reviews/${itemId}`,
        options
    ).then(
        res => res.json()
    ).then(
        data => console.log(data)
    ).catch((error) => {
        console.error('Error:', error);
    });

    return res
};


export const getAll = async () => {
    const options = {
        method: "GET",
        headers: generateWalmartHeaders(),
    };

    const res = await fetch(
        `https://developer.api.walmart.com/api-proxy/service/affil/product/v2/taxonomy`,
        options
    ).then(
        res => res.json()
    ).then(
        data => console.log(data)
    ).catch((error) => {
        console.error('Error:', error);
    });
    return res
}

catalog = getAll()

//getProductById(12320041)
//search('baby food','Gerber')
//reviews(995245590)