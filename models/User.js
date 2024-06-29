const { Schema, model } = require('mongoose');

// Define User schema
const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // Validate email format using regex
            match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
);

// Create virtual friendCount
UserSchema
    .virtual('friendCount')
    .get(function() {
        return this.friends.length;
    });

// Create User model
const User = model('User', UserSchema);

module.exports = User;