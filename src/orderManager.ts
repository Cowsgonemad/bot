import { randomInt } from 'crypto';

/**
 * Generates a random order size.
 * @param min Minimum size of the order.
 * @param max Maximum size of the order.
 * @returns A random order size between min and max.
 */
function getRandomOrderSize(min: number, max: number): number {
    return randomInt(min, max);
}

/**
 * Places a buy order with a random size.
 * @param min Minimum size of the order.
 * @param max Maximum size of the order.
 */
function placeBuyOrder(min: number, max: number): void {
    const size = getRandomOrderSize(min, max);
    console.log(`Placing buy order with size: ${size}`);
    // API call to place the buy order
    tradingAPI.placeOrder('buy', size)
        .then(response => console.log('Buy order placed successfully:', response))
        .catch(error => console.error('Failed to place buy order:', error));
}

/**
 * Places a sell order with a random size.
 * @param min Minimum size of the order.
 * @param max Maximum size of the order.
 */
function placeSellOrder(min: number, max: number): void {
    const size = getRandomOrderSize(min, max);
    console.log(`Placing sell order with size: ${size}`);
    // API call to place the sell order
    tradingAPI.placeOrder('sell', size)
        .then(response => console.log('Sell order placed successfully:', response))
        .catch(error => console.error('Failed to place sell order:', error));
}

export { placeBuyOrder, placeSellOrder };
