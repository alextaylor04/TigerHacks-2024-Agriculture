# Get Fertilizer
def npk(fertilizer):
    fertilizer_npk = {
        1: (46, 0, 0),   # Urea
        2: (34, 0, 0),   # Ammonium Nitrate
        3: (21, 0, 0),   # Ammonium Sulfate
        4: (18, 46, 0),  # Diammonium Phosphate
        5: (11, 52, 0),  # Monoammonium Phosphate
        6: (0, 0, 60),   # Potassium Chloride
        7: (0, 46, 0),   # Triple Superphosphate
        8: (0, 0, 50),   # Muriate of Potash
        9: (20, 20, 20), # 20-20-20
        10: (10, 10, 10),# 10-10-10
        11: (16, 4, 8)   # 16-4-8
    }
    
    fertilizer = int(fertilizer) #guarantee it is an integer
    nitrogen, phosphorus, potassium = fertilizer_npk.get(fertilizer)
    nitrogen += 30
    phosphorus += 30
    potassium += 30
    
    return nitrogen, phosphorus, potassium