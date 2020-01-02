class EventsController < ApplicationController
    def show
        event = Event.find_by(id: params[:id])
        render json: event
    end
    def index
        events = Event.all
        render json: events
    end
end
