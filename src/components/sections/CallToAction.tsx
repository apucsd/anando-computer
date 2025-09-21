const CallToAction = () => {
    return (
        <section id="contact" className="container">
        <div className="bg-primary rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-medium mb-4">আজই যোগাযোগ করুন!</h3>
          <p className="text-lg mb-6">আপনার প্রয়োজনীয় সেবার জন্য আমাদের সাথে কথা বলুন</p>
          <button>
          <a href="#contact" className="bg-white text-primary hover:bg-gray/20 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center gap-2">
            <span>যোগাযোগ করুন</span>
          </a>
          </button>
        </div>
        </section>
    )
}

export default CallToAction
