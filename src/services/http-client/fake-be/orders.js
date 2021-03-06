import { promisify } from '../../../utils/utils';

const mock = {
    data: [
        {
            "bookingId": 3,
            "book": {
                "bookId": 6,
                "name": "1984",
                "bookYear": 1949,
                "numberAvailable": 10,
                "bookGenres": [],
                "bookAuthors": []
            },
            "user": {
                "id": 1,
                "firstName": "Alice",
                "lastName": "Orlova",
                "email": "allie",
                "passwordHash": "hash",
                "passwordSalt": "salt",
                "isBlocked": false,
                "bookings": []
            },
            "isFinished": false, 
            "dateOfReturn": '2019-12-05'
        },
        {
            "bookingId": 4,
            "book": {
                "bookId": 2,
                "name": "thisisbook",
                "bookYear": 3000,
                "numberAvailable": 0,
                "bookGenres": [],
                "bookAuthors": []
            },
            "user": {
                "id": 1,
                "firstName": "Alice",
                "lastName": "Orlova",
                "email": "allie",
                "passwordHash": "hash",
                "passwordSalt": "salt",
                "isBlocked": false,
                "bookings": []
            },
            "isFinished": false, 
            "dateOfReturn": '2019-12-29'
        },
        {
            "bookingId": 2,
            "book": {
                "bookId": 1,
                "name": "B1",
                "bookYear": 2000,
                "numberAvailable": 1,
                "bookGenres": [
                    {
                        "bookId": 1,
                        "genreId": 2,
                        "genre": {
                            "genreId": 2,
                            "name": "g1"
                        }
                    }
                ],
                "bookAuthors": [
                    {
                        "bookId": 1,
                        "authorId": 3,
                        "author": {
                            "authorId": 3,
                            "firstName": "A1",
                            "lastName": "A1",
                            "bookAuthors": []
                        }
                    }
                ]
            },
            "user": {
                "id": 1,
                "firstName": "Alice",
                "lastName": "Orlova",
                "email": "allie",
                "passwordHash": "hash",
                "passwordSalt": "salt",
                "isBlocked": false,
                "bookings": []
            },
            "isFinished": false,
            "dateOfReturn": '2019-12-18'
        }, 
        {
            "bookingId": 4,
            "book": {
                "bookId": 2,
                "name": "B2",
                "bookYear": 1999,
                "numberAvailable": 1,
                "bookGenres": [
                    {
                        "bookId": 1,
                        "genreId": 2,
                        "genre": {
                            "genreId": 2,
                            "name": "g1"
                        }
                    }
                ],
                "bookAuthors": [
                    {
                        "bookId": 1,
                        "authorId": 3,
                        "author": {
                            "authorId": 3,
                            "firstName": "A1",
                            "lastName": "A1",
                            "bookAuthors": []
                        }
                    }
                ]
            },
            "user": {
                "id": 1,
                "firstName": "Alice",
                "lastName": "Orlova",
                "email": "allie",
                "passwordHash": "hash",
                "passwordSalt": "salt",
                "isBlocked": false,
                "bookings": []
            },
            "isFinished": true,
            "dateOrReturn": '2019-12-01'
        }
    ]
}

function order(id, bookId) {
    return promisify({data: {}});
}
 
function getAllOrders(id) {
    return promisify(mock);
}

function getAllActiveOrders() {
    return promisify({data: mock.data.filter(item => !item.isFinished)});
}

function finishOrder(id) {
    return promisify({data: mock.data.map(item => item.bookingId === id ? item.isFinished = true : item)});
}

export { getAllOrders, order, getAllActiveOrders, finishOrder };