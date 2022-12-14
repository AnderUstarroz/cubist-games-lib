import {PublicKey} from '@solana/web3.js';

export const PROGRAM_ID = new PublicKey(
  'Gamehha5KKbeZCPDu7MrpZz8JEZXtNycMy8WLjLtG5Dd',
);
export const MEMO_PROGRAM_ID = new PublicKey(
  'MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr',
);

export const SYSTEM_AUTHORITY = new PublicKey(
  'GAMEGRX4kWv15uJ7ySjovQxtongVQVeB3g3DTWh7fCVE',
);

export enum ENVIRONMENT {
  development,
  testing,
  production,
}

/**
 * There are 1-billion lamports in one SOL
 */
export const LAMPORTS_PER_SOL = 1000000000;

export const CURRENCY = 'solana';

export const MAX_TERMS = 50;

export const MAX_PERCENTAGE = 10000; // Max percentage allowed 100.00% = 10000

export const MAX_GAME_OPTIONS = 25;

export const MAX_BETS_LIMIT = 10;

export const MAX_STAKE_BUTTONS = 5;
