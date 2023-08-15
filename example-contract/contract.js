export async function handle(state, action) {
    const input = action.input;

    if (input.function === "someAction") {
        const { paymentId, amount } = input;

        // soft reentrancy payment usage
        ContractAssert(!state.txs.includes(paymentId), "ERROR_PAYID_REDEEMED");
        // GET and validate the payment
        const payments = (await EXM.deterministicFetch(`${state.hosted_molecule_endpoint}/payments`))?.asJSON();
        const paymentIndex = payments.findIndex((pay) => pay.id === paymentId);
        ContractAssert(paymentIndex >= 0, "ERROR_PAYMENT_NOT_FOUND");
        ContractAssert(payments[paymentIndex].amount >= amount, "ERROR_TX_UNDERPAID");
        ContractAssert(payments[paymentIndex].status === "paid", "ERROR_PAYMENT_UNCONFIRMED");
        // store the payment ID
        state.txs.push(paymentId);
        // now you can implement you contract's function logic
        // which can be invoking any action or state mutuation
        // after validating the payment.
        return { state };
    }   
}