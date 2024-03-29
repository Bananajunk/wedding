class InvitesController < ApplicationController

  def show
    invite = Invite.find_by_code(params[:code])
    render json: { error: "Could not find invite for code #{params[:code]}" }, status: 404 and return if invite.nil?
    render json: invite.as_json(include: :children), status: 200
  rescue => e
    render json: { error: "An unknown error occurred - #{e.message}" }, status: 500
  end

  def update
    invite = Invite.find(params[:id])
    if params[:rsvp] == 'coming'
      invite.coming!
    elsif params[:rsvp] == 'not_coming'
      invite.not_coming!
    else
      invite.unknown!
    end
    invite.guest_name = params[:guest_name]
    invite.save!
    invite.children.each do |child|
      rsvp = params[:children][child.id.to_s] == 'true'
      child.update!(rsvp: rsvp)
    end
    render json: invite.as_json(include: :children), status: 200
  rescue ActiveRecord::RecordNotFound => e
    render json: { error: "Could not find invite for code #{params[:code]}" }, status: 404
  rescue => e
    render json: { error: "An unknown error occurred - #{e.message}" }, status: 500
  end
end
