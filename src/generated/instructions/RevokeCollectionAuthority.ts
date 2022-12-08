/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category RevokeCollectionAuthority
 * @category generated
 */
export const RevokeCollectionAuthorityStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number;
}>([['instructionDiscriminator', beet.u8]], 'RevokeCollectionAuthorityInstructionArgs');
/**
 * Accounts required by the _RevokeCollectionAuthority_ instruction
 *
 * @property [_writable_] collectionAuthorityRecord Collection Authority Record PDA
 * @property [_writable_] delegateAuthority Delegated Collection Authority
 * @property [_writable_, **signer**] revokeAuthority Update Authority, or Delegated Authority, of Collection NFT
 * @property [] metadata Metadata account
 * @property [] mint Mint of Metadata
 * @category Instructions
 * @category RevokeCollectionAuthority
 * @category generated
 */
export type RevokeCollectionAuthorityInstructionAccounts = {
  collectionAuthorityRecord: web3.PublicKey;
  delegateAuthority: web3.PublicKey;
  revokeAuthority: web3.PublicKey;
  metadata: web3.PublicKey;
  mint: web3.PublicKey;
};

export const revokeCollectionAuthorityInstructionDiscriminator = 24;

/**
 * Creates a _RevokeCollectionAuthority_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category RevokeCollectionAuthority
 * @category generated
 */
export function createRevokeCollectionAuthorityInstruction(
  accounts: RevokeCollectionAuthorityInstructionAccounts,
  programId = new web3.PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'),
) {
  const [data] = RevokeCollectionAuthorityStruct.serialize({
    instructionDiscriminator: revokeCollectionAuthorityInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.collectionAuthorityRecord,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.delegateAuthority,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.revokeAuthority,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.metadata,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
