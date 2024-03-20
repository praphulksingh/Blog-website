/*this file will authunticate the user's data from appwrite services */

import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    //connections to the appwrite service
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    //taking inputs from user to create account
    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    //taking inputs from user to login account
    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) { /*.createEmailSession() is appwrite function that handle email verification and password now it is updated as createEmailPasswordSession()*/
            throw error;
        }
    }

    //this will sent or give current user
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    //this will loguot the current user and delete the current user session
    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService


