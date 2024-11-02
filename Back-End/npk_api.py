# Get Fertilizer
def npk(fertilizer):
    fertilizer_npk = {
        1: (46, 0, 0),   # Urea
        2: (34, 0, 0),   # Ammonium Nitrate
        3: (21, 0, 0),   # Ammonium Sulfate
        4: (18, 46, 0),  # Diammonium Phosphate (DAP)
        5: (11, 52, 0),  # Monoammonium Phosphate (MAP)
        6: (0, 0, 60),   # Potassium Chloride
        7: (0, 46, 0),   # Triple Superphosphate (TSP)
        8: (0, 0, 50),   # Muriate of Potash
        9: (20, 20, 20), # All-Purpose Fertilizer (20-20-20)
        10: (10, 10, 10),# All-Purpose Fertilizer (10-10-10)
        11: (16, 4, 8)   # Lawn Fertilizer (16-4-8)
    }
    
    # Retrieve the NPK values or return a default (0, 0, 0) if the fertilizer number is invalid
    nitrogen, phosphorus, potassium = fertilizer_npk.get(fertilizer, (0, 0, 0))
    
    return nitrogen, phosphorus, potassium