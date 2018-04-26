import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';
import { gte } from '@ember/object/computed';
import { and } from '@ember/object/computed';

export default Controller.extend({

  responseMessage: '',
  emailAddress: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),
  isLongEnough: gte("yourProperty.length", 5),
  isBothTrue: and('firstComputedProperty', 'secondComputedProperty'),

  actions: {

    saveInvitation() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! : ${this.get('emailAddress')}, We got your message and we'll be in touch soon.`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }

});
