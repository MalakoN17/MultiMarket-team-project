import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createSectionsApi, getAllSectionsApi } from './sectionService';

const initialState = {
    sections: [],
    newSection:''
  };


export const getAllSections = createAsyncThunk('section/getAllSections', async(storeId,thunkAPI)=>{
    try {

        const data = await getAllSectionsApi(storeId)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})
export const createSections = createAsyncThunk('section/createSections', async(section,thunkAPI)=>{
    try {
        
        const data = await createSectionsApi(section)
        console.log(data);
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})



const sectionSlice = createSlice({
    name:'section',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllSections.pending, (state, action)=>{
            
        })
        .addCase(getAllSections.fulfilled, (state, action)=>{
            state.sections = action.payload
        })
        .addCase(createSections.fulfilled, (state, action)=>{
            state.newSection = action.payload
            console.log('hey');
        })
    }
}) 


export default sectionSlice.reducer