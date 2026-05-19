// Reserve — dark glass form
const { useState: useStateR } = React;

const Reserve = () => {
  const [tab, setTab] = useStateR('one-way');
  const [occasion, setOccasion] = useStateR('Night Out');
  const [submitted, setSubmitted] = useStateR(false);
  const [form, setForm] = useStateR({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    name: '',
    phone: '',
  });

  const occasions = ['Night Out', 'Wedding', 'Anniversary', 'Airport', 'Business', 'Prom', 'Photo Shoot', 'Other'];

  const update = (k, v) => setForm(f => ({...f, [k]: v}));
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };
  const reset = () => { setSubmitted(false); setForm({pickup:'',dropoff:'',date:'',time:'',name:'',phone:''}); };

  return (
    <section className="reserve" id="reserve" data-screen-label="07 Reserve">
      <div className="reserve-grid">
        <div className="reserve-head">
          <div className="chapter-mark">
            <span className="rune">v</span>
            Chapter Five — Reserve
          </div>
          <h2 className="display">
            Your comfort, your time — <em>same thread to the curb.</em>
          </h2>
          <p className="lede">
            Call or text for the fastest reply. Or send pickup, date, and occasion — Ryan confirms personally, usually within an hour.
          </p>
          <div className="reserve-marks">
            <div className="reserve-mark">
              <span className="ix">01.</span>
              <span className="txt">Tell us where the evening begins and where it ends.</span>
            </div>
            <div className="reserve-mark">
              <span className="ix">02.</span>
              <span className="txt">Ryan calls or texts within the hour to confirm details.</span>
            </div>
            <div className="reserve-mark">
              <span className="ix">03.</span>
              <span className="txt">The sedan arrives six minutes early. Engine warm. Cabin dressed.</span>
            </div>
          </div>
        </div>

        <form className="book-card" onSubmit={submit}>
          {!submitted ? (
            <>
              <a className="book-call-primary" href="tel:+16672071472">Call or text · 667 · 207 · 1472</a>
              <div className="book-divider" aria-hidden="true">
                <span className="book-divider-line" />
                <span className="book-divider-label">Or send details</span>
                <span className="book-divider-line" />
              </div>
              <div className="book-eyebrow">The request</div>
              <h3>An evening, <em>composed.</em></h3>

              <div className="book-tabs">
                {[
                  {k:'one-way', l:'One Way'},
                  {k:'by-hour', l:'By The Hour'},
                  {k:'event',   l:'Full Evening'},
                ].map(t => (
                  <button type="button" key={t.k}
                    className={"book-tab " + (tab===t.k ? 'active' : '')}
                    onClick={() => setTab(t.k)}>{t.l}</button>
                ))}
              </div>

              <div className="book-row">
                <div className="book-field">
                  <label>Pickup</label>
                  <input type="text" placeholder="123 Light St, Baltimore"
                    value={form.pickup} onChange={e=>update('pickup', e.target.value)} required />
                </div>
                <div className="book-field">
                  <label>{tab==='by-hour' ? 'Destination (optional)' : 'Drop-off'}</label>
                  <input type="text" placeholder="The Charles, BWI, ..." 
                    value={form.dropoff} onChange={e=>update('dropoff', e.target.value)} 
                    required={tab!=='by-hour'} />
                </div>
              </div>

              <div className="book-row">
                <div className="book-field">
                  <label>Date</label>
                  <input type="date" value={form.date} onChange={e=>update('date', e.target.value)} required />
                </div>
                <div className="book-field">
                  <label>Pickup Time</label>
                  <input type="time" value={form.time} onChange={e=>update('time', e.target.value)} required />
                </div>
              </div>

              <div style={{marginTop: 16}}>
                <label style={{
                  display:'block', fontFamily:'var(--f-mono)', fontSize: 9,
                  letterSpacing: '0.32em', textTransform:'uppercase', color:'var(--mute)',
                  marginBottom: 4
                }}>Occasion</label>
                <div className="book-occasions">
                  {occasions.map(o => (
                    <button type="button" key={o}
                      className={"book-occ " + (occasion===o ? 'active' : '')}
                      onClick={() => setOccasion(o)}>{o}</button>
                  ))}
                </div>
              </div>

              <div className="book-row" style={{marginTop: 24}}>
                <div className="book-field">
                  <label>Your Name</label>
                  <input type="text" placeholder="J. Carter"
                    value={form.name} onChange={e=>update('name', e.target.value)} required />
                </div>
                <div className="book-field">
                  <label>Mobile</label>
                  <input type="tel" placeholder="(443) ___-____"
                    value={form.phone} onChange={e=>update('phone', e.target.value)} required />
                </div>
              </div>

              <button type="submit" className="book-submit">
                <span>Send details</span>
                <span className="arrow" />
              </button>
            </>
          ) : (
            <div className="book-success">
              <div className="check">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M7 16 L13 22 L25 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>The Evening is Reserved.</h3>
              <p>Ryan will reach out within the hour, <em style={{color:'var(--rose)'}}>{form.name || 'thank you'}</em>.</p>
              <div className="book-summary">
                <div><div className="l">Pickup</div><div className="v">{form.pickup || '—'}</div></div>
                <div><div className="l">Drop-off</div><div className="v">{form.dropoff || '—'}</div></div>
                <div><div className="l">Date</div><div className="v">{form.date || '—'}</div></div>
                <div><div className="l">Time</div><div className="v">{form.time || '—'}</div></div>
                <div><div className="l">Occasion</div><div className="v">{occasion}</div></div>
                <div><div className="l">Service</div><div className="v" style={{textTransform:'capitalize'}}>{tab.replace('-',' ')}</div></div>
              </div>
              <button type="button" className="btn" onClick={reset}>
                <span>Plan Another</span>
                <span className="arrow" />
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

window.Reserve = Reserve;
