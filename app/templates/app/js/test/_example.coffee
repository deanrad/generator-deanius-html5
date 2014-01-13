expect = if window? and window.expect? then window.expect else require('chai').expect

define ['coffee!js/example'], (example)->
  describe "best practices", ->
    it "you should practice writing passing tests", ->
      expect( example.coolestNumber ).to.eql 42
