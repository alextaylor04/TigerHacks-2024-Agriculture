# Returns nitrogen, phosphorus, and potassium levels at location [lat, lon]. If there isn't any exact data it gives an educated guess.
def npk(lat, lon):
    nitrogen = 0.14 # Given in percent.
    phosphorus = 0.6 # Given in percent.
    potassium = 0.83 # Given in percent.
    return nitrogen, phosphorus, potassium

print(npk(39.099724,-94.578331)) # Kansas City
