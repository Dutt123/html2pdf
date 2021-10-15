apt-get update
apt-get install -y libappindicator1 fonts-liberation
apt-get install -f
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
dpkg -i google-chrome*.deb
apt-get install -f -y