class Invite < ApplicationRecord
  has_many :children

  validates :name, :code, presence: true
  validates :code, uniqueness: true

  def children?
    !self.children.empty?
  end
end
