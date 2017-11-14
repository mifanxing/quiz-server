$ Host 

    http://192.168.1.167:5000
    
# Quizzes
 /quizzes
 
 

[get] /quizzes/:id

```
http://localhost:5000/quizzes/5a0a9ae130e9251c0cfb1ecf


{
    "code": 200,
    "data": {
        "_id": "5a0a9ae130e9251c0cfb1ecf",
        "description": "测试描述",
        "title": "测试标题",
        "__v": 0,
        "updated": "2017-11-14T07:27:29.213Z",
        "created": "2017-11-14T07:27:29.212Z",
        "image": "https://pic4.zhimg.com/v2-64034bf497f3b792fb661d0aa268930b_b.jpg"
    }
}

``` 

[post]  /quizzes/5a0a9ae130e9251c0cfb1ecf/sessions

```

{
    "code": 200,
    "data": {
        "__v": 0,
        "_id": "5a0a9ebb3c66e013c0b8636f", //session id 
        "updated": "2017-11-14T07:43:55.408Z",
        "created": "2017-11-14T07:43:55.408Z",
        "finished": false
    }
}


```

 
