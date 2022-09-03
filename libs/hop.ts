import {APIAuthentication, Hop} from '@onehop/js';

// Export the Hop SDK instance so you can use it throughout your codebase
export const hop = new Hop(process.env.HOP  as APIAuthentication);