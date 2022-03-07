class Api::GrettingsController < ApplicationController
  def index
    randgretting = Gretting.order(Arel.sql('RANDOM()')).first

    render json: { greetings: [
      {
        message: randgretting.message
      }
    ] }.to_json
  end
end
