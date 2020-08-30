require "set"

# Helpers to calculate the Jaccard Coefficient Index and related metrics easily.
#
# (from Wikipedia): The Jaccard coefficient measures similarity between sample sets, and is defined
# as the size of the intersection divided by the size of the union of the sample sets.
#
# The closer to 1.0 this number is, the more similar two items are.
module Jaccard
  # Calculates the Jaccard Coefficient Index.
  #
  # +a+ must implement the set intersection and set union operators: <code>#&</code> and <code>#+</code>. Array and Set
  # both implement these methods natively. It is expected that the results of <code>+</code> will either return a
  # unique set or that it returns an object that responds to +#uniq!+. The results of +#coefficient+ will be
  # wrong if the union contains duplicate elements.
  #
  # Also note that the individual items in +a+ and +b+ must implement a sane #eql? method.
  # ActiveRecord::Base, String, Fixnum (but not Float), Array and Hash instances all implement
  # a correct notion of equality. Other instances might have to be checked to ensure correct
  # behavior.
  #
  # @param [#&, #+] a A set of items
  # @param [#&, #+] b A second set of items
  #
  # @return [Float] The Jaccard Coefficient Index between +a+ and +b+.
  #
  # @example
  #
  #   a = [1, 2, 3, 4]
  #   b = [1, 3, 4]
  #   Jaccard.coefficient(a, b) #=> 0.75
  #
  # @see http://en.wikipedia.org/wiki/Jaccard_index Jaccard Coefficient Index on Wikipedia.
  def self.coefficient(a, b)
      raise ArgumentError, "#{a.inspect} does not implement #&" unless a.respond_to?(:&)
        raise ArgumentError, "#{a.inspect} does not implement #+" unless a.respond_to?(:+)

    intersection = a & b
    union        = a + b

    # Set does not implement #uniq or #uniq! since elements are
    # always guaranteed to be present only once. That's the only
    # reason we need to guard against that here.
    union.uniq! if union.respond_to?(:uniq!)

    intersection.length.to_f / union.length.to_f
  end
  end
  
stringa1 = "Grand Theft Auto V"
stringa2 = "Grand Theft Auto V The Legacy of Goku"
res = stringa1.split(" ")
res2 = stringa2.split(" ")
puts Jaccard.coefficient(res, res2)
