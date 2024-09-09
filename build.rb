require "phlex"
require "phlexite"

require_relative "pages/layout"
require_relative "pages/home"

Phlexite::Site.new { |s|
  s.mount "assets", on: "/"
  s.page "index.html", Pages::Home.new
}
