export const schema = {
    "models": {
        "RepostV3": {
            "name": "RepostV3",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "profileID": {
                    "name": "profileID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "postID": {
                    "name": "postID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "repostDate": {
                    "name": "repostDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "RepostToProfile": {
                    "name": "RepostToProfile",
                    "isArray": false,
                    "type": {
                        "model": "ProfileV3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "repostV3RepostToProfileId"
                    }
                },
                "RepostToPost": {
                    "name": "RepostToPost",
                    "isArray": false,
                    "type": {
                        "model": "PostV3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "repostV3RepostToPostId"
                    }
                }
            },
            "syncable": true,
            "pluralName": "RepostV3s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byProfileV3",
                        "fields": [
                            "profileID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPostV3",
                        "fields": [
                            "postID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "ProfileV3": {
            "name": "ProfileV3",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "phoneNum": {
                    "name": "phoneNum",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": true,
                    "attributes": []
                },
                "profilePic": {
                    "name": "profilePic",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "dob": {
                    "name": "dob",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "profileDate": {
                    "name": "profileDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "ProfileToPosts": {
                    "name": "ProfileToPosts",
                    "isArray": true,
                    "type": {
                        "model": "PostV3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "profileID"
                    }
                },
                "ProfileToFollowings": {
                    "name": "ProfileToFollowings",
                    "isArray": true,
                    "type": {
                        "model": "FollowingV3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "profileID"
                    }
                },
                "ProfileToFeedTypes": {
                    "name": "ProfileToFeedTypes",
                    "isArray": true,
                    "type": {
                        "model": "FeedTypeV3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "profileID"
                    }
                },
                "ProfileToLikes": {
                    "name": "ProfileToLikes",
                    "isArray": true,
                    "type": {
                        "model": "LikesV3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "profileID"
                    }
                },
                "ProfileToComments": {
                    "name": "ProfileToComments",
                    "isArray": true,
                    "type": {
                        "model": "CommentV3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "profileID"
                    }
                },
                "ProfileToReposts": {
                    "name": "ProfileToReposts",
                    "isArray": true,
                    "type": {
                        "model": "RepostV3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "profileID"
                    }
                },
                "bio": {
                    "name": "bio",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "ProfileV3s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "PostV3": {
            "name": "PostV3",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "profileID": {
                    "name": "profileID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "feedTypeID": {
                    "name": "feedTypeID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "postDate": {
                    "name": "postDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "tags": {
                    "name": "tags",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                },
                "post": {
                    "name": "post",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "PostToProfile": {
                    "name": "PostToProfile",
                    "isArray": false,
                    "type": {
                        "model": "ProfileV3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "postV3PostToProfileId"
                    }
                },
                "PostToFeedType": {
                    "name": "PostToFeedType",
                    "isArray": false,
                    "type": {
                        "model": "FeedTypeV3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "postV3PostToFeedTypeId"
                    }
                },
                "PostToLikes": {
                    "name": "PostToLikes",
                    "isArray": true,
                    "type": {
                        "model": "LikesV3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "postID"
                    }
                },
                "PostToComments": {
                    "name": "PostToComments",
                    "isArray": true,
                    "type": {
                        "model": "CommentV3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "postID"
                    }
                },
                "PostToReposts": {
                    "name": "PostToReposts",
                    "isArray": true,
                    "type": {
                        "model": "RepostV3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "postID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "PostV3s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byProfileV3",
                        "fields": [
                            "profileID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "FeedTypeV3": {
            "name": "FeedTypeV3",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "profileID": {
                    "name": "profileID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "FeedTypeToPost": {
                    "name": "FeedTypeToPost",
                    "isArray": false,
                    "type": {
                        "model": "PostV3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "feedTypeV3FeedTypeToPostId"
                    }
                },
                "FeedTypeToProfile": {
                    "name": "FeedTypeToProfile",
                    "isArray": false,
                    "type": {
                        "model": "ProfileV3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "feedTypeV3FeedTypeToProfileId"
                    }
                },
                "FeedTypeToFollowing": {
                    "name": "FeedTypeToFollowing",
                    "isArray": true,
                    "type": {
                        "model": "FollowingV3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "feedtype2ID"
                    }
                },
                "followingID": {
                    "name": "followingID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "feedName": {
                    "name": "feedName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "FeedTypeV3s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byProfileV3",
                        "fields": [
                            "profileID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byFollowingV3",
                        "fields": [
                            "followingID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "FollowingV3": {
            "name": "FollowingV3",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "profileID": {
                    "name": "profileID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "feedTypeID": {
                    "name": "feedTypeID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "followingDate": {
                    "name": "followingDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "followsAll": {
                    "name": "followsAll",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "FollowingToProfile": {
                    "name": "FollowingToProfile",
                    "isArray": false,
                    "type": {
                        "model": "ProfileV3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "followingV3FollowingToProfileId"
                    }
                },
                "FollowingToFeedTypes": {
                    "name": "FollowingToFeedTypes",
                    "isArray": true,
                    "type": {
                        "model": "FeedTypeV3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "followingID"
                    }
                },
                "feedtype2ID": {
                    "name": "feedtype2ID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "FollowingV3s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byProfileV3",
                        "fields": [
                            "profileID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byFeedTypeV3",
                        "fields": [
                            "feedtype2ID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "LikesV3": {
            "name": "LikesV3",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "profileID": {
                    "name": "profileID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "postID": {
                    "name": "postID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "likeDate": {
                    "name": "likeDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "LikeToProfile": {
                    "name": "LikeToProfile",
                    "isArray": false,
                    "type": {
                        "model": "ProfileV3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "likesV3LikeToProfileId"
                    }
                },
                "LikeToPost": {
                    "name": "LikeToPost",
                    "isArray": false,
                    "type": {
                        "model": "PostV3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "likesV3LikeToPostId"
                    }
                }
            },
            "syncable": true,
            "pluralName": "LikesV3s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byProfileV3",
                        "fields": [
                            "profileID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPostV3",
                        "fields": [
                            "postID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "CommentV3": {
            "name": "CommentV3",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "profileID": {
                    "name": "profileID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "postID": {
                    "name": "postID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "comment": {
                    "name": "comment",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "commentDate": {
                    "name": "commentDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "CommentToProfile": {
                    "name": "CommentToProfile",
                    "isArray": false,
                    "type": {
                        "model": "ProfileV3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "commentV3CommentToProfileId"
                    }
                },
                "CommentToPost": {
                    "name": "CommentToPost",
                    "isArray": false,
                    "type": {
                        "model": "PostV3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "commentV3CommentToPostId"
                    }
                }
            },
            "syncable": true,
            "pluralName": "CommentV3s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byProfileV3",
                        "fields": [
                            "profileID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPostV3",
                        "fields": [
                            "postID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
<<<<<<< HEAD
    "version": "6d2231a325120e32a359f2902df09e82"
=======
    "version": "50093e7fdf22865a60fb6d2f6c8811e7"
>>>>>>> 11b0e76 (trying the commit again)
};