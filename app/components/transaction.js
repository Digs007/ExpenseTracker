import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class TransactionComponent extends Component {
  @service tracker;
  @action
  deleteTransaction(transaction) {
    this.tracker.transactions = this.tracker.transactions.filter(
      (transa) => transa.id !== transaction.id
    );
    if (transaction.amount > 0)
      this.tracker.income -= parseInt(transaction.amount);
    else this.tracker.expense -= parseInt(transaction.amount);
    this.tracker.total = this.tracker.income + this.tracker.expense;
    // console.log(this.tracker.transactions);
  }
}
