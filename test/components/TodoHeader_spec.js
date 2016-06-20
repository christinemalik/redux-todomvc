import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoHeader from '../../src/components/TodoHeader';
import {expect} from 'chai';

const {renderIntoDocument, Simulate} = TestUtils;

describe('TodoHeader', function() {
  it('calls a callback on submit', function() {
    var addedItem = '';
    const addItem = function(item) {
      addedItem = item;
    };
    const component = renderIntoDocument(<TodoHeader addItem={addItem} />);

    const input = component.refs.addTodoInput;
    input.value = 'This is a new item';
    Simulate.change(input);
    Simulate.keyPress(input, {key: 'Enter', keyCode: 13, which: 13});

    expect(addedItem).to.equal('This is a new item');
    expect(input.value).to.equal('');
  });

});
