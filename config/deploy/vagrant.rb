set :deploy_server,   "lithium.locum.ru"

set :user,            "hosting_saratovsource"
set :login,           "saratovsource"
set :use_sudo,        false
set :deploy_to,       "/home/#{user}/projects/#{application}"
set :unicorn_conf,    "/etc/unicorn/#{application}.#{login}.rb"
set :unicorn_pid,     "/var/run/unicorn/#{application}.#{login}.pid"

before "deploy:finalize_update", :copy_database_config
task :copy_database_config, roles => :app do
  db_config = "#{shared_path}/mongoid.yml"
  run "cp #{db_config} #{release_path}/config/mongoid.yml"
end
