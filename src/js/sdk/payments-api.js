import $ from 'node_modules/jquery'
import { Sandbox } from './environments'

class PaymentsApi {
  constructor(token) {
    this._token = token
  }

  _headers() {
    return {
      'Authorization': `Bearer ${this._token}`,
      'Content-Type': 'application/json'
    }
  }

  async bins() {
    return await $.ajax({
      url: Sandbox.BINS,
      method: 'GET',
      headers: this._headers()
    })
  }

  async payWithCards(payment) {
    return await $.ajax({
      url: Sandbox.PAY_WITH_CARDS,
      method: 'POST',
      headers: this._headers(),
      data: JSON.stringify(payment)
    })
  }

  async sendCardReceipt(nsu, contact) {
    return await $.ajax({
      url: Sandbox.SEND_CARD_RECEIPT.replace(':nsu', nsu),
      method: 'POST',
      headers: this._headers(),
      data: JSON.stringify(contact)
    })
  }
}

export default PaymentsApi
