defaults: &defaults
  host: localhost
  port: 27017
  # slaves:
  #   - host: slave1.local
  #     port: 27018
  #   - host: slave2.local
  #     port: 27019

development:
  <<: *defaults
  database: advamedia_dev

test:
  <<: *defaults
  database: advamedia_test

# set these environment variables on your prod server
production:
  <<: *defaults
  database: advamedia_prod

  # other settings for production
  # host: <%= ENV['MONGOID_HOST'] %>
  # port: <%= ENV['MONGOID_PORT'] %>
  # username: <%= ENV['MONGOID_USERNAME'] %>
  # password: <%= ENV['MONGOID_PASSWORD'] %>
  # database: <%= ENV['MONGOID_DATABASE'] %>

  # heroku
  # uri: <%= ENV['MONGOHQ_URL'] %>

  # bushido (mongohq_url will also work)
  # uri: <%= ENV['MONGODB_URL'] %>
