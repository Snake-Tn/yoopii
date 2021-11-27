#! ruby


module M1
  def fff
    p 'M1'
  end
  def fff2
    p 'M1'
  end
end
module M2
  # include M1
  def fff
    p 'M2'
  end
end
class C2
  def fff
    p 'C2'
  end
end

class C1
  # end of class


  # def fff
  #   p 'C1'
  # end
  include M1


end

p C1.instance_methods - Object.instance_methods