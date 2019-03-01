'use strict';

const promisify = require('utils').promisify;
const bcrypt = require('bcrypt')

// or in the constructor. - change bcrypt from a promise to a asynchronous function

module.exports = class {
    constructor() {
        this.genSalteAsync = promisify(bcrypt.genSalt)
        this.hashAsync = promisify(bcrypt.hash)
        this.compareAsync = promisify(bcrypt.compare)
        `/* or promisify all*/`
        `/* this.bcryptAsync = promisify.all(bcrypt) */`
        `/* and methods will be */`
        `/* this.bcryptAsync.genSalt() */`
        `/* this.bcryptAsync.hash(plainTextPassword) */`
        `/* this.bcryptAsync.compare(plainTextPassword, hashedPassword) */`
    }

    async hashPassword(plainTextPassword) {
        try {
            const salt = await this.genSalteAsync()
            return await this.hashAsync(plainTextPassword, salt)
        } catch(err) {
            throw err
        }
    };

    async checkPassword(plainTextPassword, hashedPassword) {
        try {
            return await this.compareAsync(plainTextPassword, hashedPassword)
        } catch(err) {
            throw err
        }
    };
}

// Jacky's version of bcrypt using ES
