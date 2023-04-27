function SearchBarHero() {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <form
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              // eslint-disable-next-line no-console
              console.log(
                `Search for: ${new FormData(e.currentTarget).get("search")}`
              );
            }}
          >
            <h1 className="is-size-3">How can we help?</h1>
            <div className="field">
              <div className="field-body">
                <div className="field is-grouped">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="text"
                      placeholder="Find a repository"
                      name="search"
                    />
                  </p>
                  <p className="control">
                    <button className="button is-info">See all results</button>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function Root(props) {
  return (
    <main>
      <SearchBarHero />
    </main>
  );
}
