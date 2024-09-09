class Pages::Blog < ::Phlex::HTML
  def view_template
    render ::Pages::Layout.new(:blog) {
      p { "under construction" }
    }
  end
end
