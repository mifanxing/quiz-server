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

[get] /sessions/:sessionId/questionId

```
http://localhost:5000/sessions/5a0bf11a8caf3d1cd0a82ad3/5a0beae789cce61ac048a1ee

如果已经填写过该问题，则返回的数据携带是否正确的信息(和post的数据结构相同)

{
    "code": 200,
    "data": {
        "session_id": "5a0bf11a8caf3d1cd0a82ad3",
        "question": {
            "_id": "5a0beae789cce61ac048a1ee",
            "quiz": "5a0a9ae130e9251c0cfb1ecf",
            "title": "测试问题",
            "__v": 0,
            "updated": "2017-11-15T07:21:11.933Z",
            "created": "2017-11-15T07:21:11.933Z",
            "question_order": 0
        },
        "correct": true,
        "answer": {
            "multiple": false,
            "options": [
                {
                    "_id": "5a0beae889cce61ac048a1f0",
                    "label": "选项1",
                    "correct": false
                },
                {
                    "_id": "5a0beae889cce61ac048a1f1",
                    "label": "选项2",
                    "correct": false
                },
                {
                    "_id": "5a0bff946c0cf5204dbba3c7",
                    "label": "选项3",
                    "correct": false
                },
                {
                    "_id": "5a0bff9e6c0cf5204dbba3d6",
                    "label": "选项4",
                    "correct": true
                }
            ]
        },
        "next": "5a0beecb6c4c8011d44dd4b5"
    }
}

否则 返回如下数据:

{
    "code": 200,
    "data": {
        "session_id": "5a0bf11a8caf3d1cd0a82ad3",
        "question": {
            "_id": "5a0beae789cce61ac048a1ee",
            "quiz": "5a0a9ae130e9251c0cfb1ecf",
            "title": "测试问题",
            "__v": 0,
            "updated": "2017-11-15T07:21:11.933Z",
            "created": "2017-11-15T07:21:11.933Z",
            "question_order": 0
        },
        "answer": {
            "multiple": false,
            "options": [
                {
                    "_id": "5a0beae889cce61ac048a1f0",
                    "label": "选项一"
                },
                {
                    "_id": "5a0beae889cce61ac048a1f1",
                    "label": "选项2"
                }
            ]
        },
        "next": "5a0beecb6c4c8011d44dd4b5"
    }
}

``` 
[post] /sessions/:sessionId/questionId
```
{"value":"5a0bff9e6c0cf5204dbba3d6"}

```



```
http://localhost:5000/sessions/5a0bf11a8caf3d1cd0a82ad3/5a0beae789cce61ac048a1ee

{
    "code": 200,
    "data": {
        "session_id": "5a0bf11a8caf3d1cd0a82ad3",
        "question": {
            "_id": "5a0beae789cce61ac048a1ee",
            "quiz": "5a0a9ae130e9251c0cfb1ecf",
            "title": "测试问题",
            "__v": 0,
            "updated": "2017-11-15T07:21:11.933Z",
            "created": "2017-11-15T07:21:11.933Z",
            "question_order": 0
        },
        "correct": true,
        "answer": {
            "multiple": false,
            "options": [
                {
                    "_id": "5a0beae889cce61ac048a1f0",
                    "label": "选项1",
                    "correct": false
                },
                {
                    "_id": "5a0beae889cce61ac048a1f1",
                    "label": "选项2",
                    "correct": false
                },
                {
                    "_id": "5a0bff946c0cf5204dbba3c7",
                    "label": "选项3",
                    "correct": false
                },
                {
                    "_id": "5a0bff9e6c0cf5204dbba3d6",
                    "label": "选项4",
                    "correct": true
                }
            ]
        },
        "next": "5a0beecb6c4c8011d44dd4b5"
    }
}

``` 


 
