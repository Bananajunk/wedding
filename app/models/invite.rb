class Invite < ApplicationRecord
  has_many :children

  validates :name, :code, presence: true
  validates :code, uniqueness: true

  enum rsvp: %w(unknown coming not_coming)

  def children?
    !self.children.empty?
  end
end
