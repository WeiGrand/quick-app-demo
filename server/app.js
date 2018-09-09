/**
 * Created by heweiguang on 2018/8/28.
 */

const express = require('express');
const bodyParse = require('body-parser');
const request = require('request');

const app = express();
const router = express.Router();
const post = process.env.PORT || 3000;
const api = 'https://m.zuzuche.com/tantu/list_act.php?';

app.use(bodyParse.urlencoded({
  extended: true
}));

app.use(bodyParse.json());

router.get('/', function (req, res) {
  res.json({
    message: 'Hello world'
  })
});

router.get('/list', function (req, res) {
  const {
    query
  } = req;

  const url = api + Object.keys(query).map((key) => {
    return key + '=' + query[key]
  }).join('&');

  request(url, {
    json: true
  }, function (err, response, body) {

    if (err) {
      return res.json({
        message: err.message
      });
    }

    const {
      statusCode
    } = response;

    const {
      data: {
        goods_list,
        paginate
      }
    } = body;

    if (statusCode === 200) {
      return res.json({
        code: 200,
        data: {
          list: goods_list,
          pagination: paginate
        }
      });
    }

    return res.json({
      message: '网络异常'
    });
  });
});

app.use('/api', router);

app.listen(post, () => console.log('Server is running on port ' + post));
