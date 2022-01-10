import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
// import { tracked } from '@glimmer/tracking';
export default class BalanceComponent extends Component {
  @service tracker;
  // @tracked
  // amounts = this.tracker.transactions.map((transaction) => transaction.amount);
  // @tracked
  // total = this.amounts.reduce((acc, item) => (acc += item), 0);
}
