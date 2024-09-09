class Pages::About < ::Phlex::HTML
  def view_template
    render ::Pages::Layout.new(:about) {
      p { "under construction" }
    }
  end
end
