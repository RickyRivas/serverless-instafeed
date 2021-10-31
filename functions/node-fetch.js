const axios = require('axios');

exports.handler = function instagram(event, context, callback) {
const token = process.env.INSTAGRAM_ACCESS_TOKEN;
const userId = 4226862094085798;
const endpoint = 'https://graph.instagram.com';
const fields = 'id,caption,media_url,permalink,username,follows_count';
const limit = 5;
const url = `${endpoint}/${userId}/media/?fields=${fields}&access_token=${token}&count=${limit}`;

  axios
    .get(url)
    .then(({ data: { data: posts } }) => {
      callback(null, {
        statusCode: 200,
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(
          posts.map(i => ({
            id: i.id,
            url: i.media_url,
            caption: i.caption,
            username: i.username,
            follows_count: i.follows_count
          })),
        ),
      })
    })
    .catch((e) => {
      callback(e)
    })
}