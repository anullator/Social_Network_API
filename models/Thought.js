const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Define Thought schema
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    },
);

// Format date
thoughtSchema
    .path('createdAt')
    .get(function(date) {
        return date.toISOString();
    });

// Create virtual reactionCount
thoughtSchema
    .virtual('reactionCount')
    .get(function() {
        return this.reactions.length;
    });

// Create Thought instance
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;