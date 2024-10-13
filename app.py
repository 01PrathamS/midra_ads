from flask import Flask, render_template

app = Flask(__name__)

@app.route('/create_campaign')
def create_campaign():
    return render_template('create_campaign.html')

if __name__ == '__main__':
    app.run(debug=True)
