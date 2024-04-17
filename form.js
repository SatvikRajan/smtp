<form action="/send-email" method="POST">
            <label for="name" class="inp">
              <input type="text" id="name" name="senderName" placeholder="&nbsp;" />
              <span class="label">Name</span>
              <span class="focus-bg"></span>
            </label>
            <div class="d-flex" style={{ gap: '15px' }}>
              <label for="email" class="inp">
                <input type="text" id="email" name="senderEmail" placeholder="&nbsp;" />
                <span class="label">Email</span>
                <span class="focus-bg"></span>
              </label>
              <label for="phone" class="inp ">
                <input type="text" id="phone" name="senderPhone" placeholder="&nbsp;" />
                <span class="label"> Phone Number</span>
                <span class="focus-bg"></span>
              </label>
            </div>
            <label for="subject" class="inp">
              <input type="text" id="subject" name="subject" placeholder="&nbsp;" />
              <span class="label">Subject</span>
              <span class="focus-bg"></span>
            </label>

            <label for="inp" class="inp">
              <input type="text" id="inp" name="text" placeholder="&nbsp;" />
              <span class="label">Message</span>
              <span class="focus-bg"></span>
            </label>
            <div class="input-group">
              <button class="btn btn-primary submit" type="submit">
                <span>Submit </span>
              </button>
            </div>
          </form>
