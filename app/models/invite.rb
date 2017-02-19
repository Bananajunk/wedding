class Invite < ApplicationRecord
  has_many :children

  validates :name, :guest, :code, presence: true
  validates :code, uniqueness: true

  before_validation :generate_code

  def generate_code
    self.code = '%04d' % rand(10**4) if self.code.nil?
  end

  def children?
    !self.children.empty?
  end
end
