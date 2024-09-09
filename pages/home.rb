class Pages::Home < ::Phlex::HTML
  def view_template
    render ::Pages::Layout.new("Home") {
      h1 { "Home" }
    }
  end
end
