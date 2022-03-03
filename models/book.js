var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema는 document의 구조가 어떻게 생겼는지 알려주는 역할
var bookSchema = new Schema({
    title: String,
    author: String,
    published_date: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('book', bookSchema);     //model 모듈화, model은 데이터 조회,입력,수정,삭제 하기 위한 인터페이스 
                                                        //book이라고 지정하면 mongoDB에서는 books(복수형)으로 컬렉션을 사용하겠다는 의미
