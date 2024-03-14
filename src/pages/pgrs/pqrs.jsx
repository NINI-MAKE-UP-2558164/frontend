import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pqrs = () => {
    return (
        <>
            <form>
                <fieldset >
                    <legend>Disabled fieldset example</legend>
                    <div class="mb-3">
                        <label  class="form-label">Disabled input</label>
                        <input type="text"  class="form-control" ></input>
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Disabled select menu</label>
                        <select id='' class="form-select">
                            <option>Disabled select</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" ></input>
                                <label class="form-check-label" >
                                    Can't check this
                                </label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </fieldset>
            </form>
        </>
    );
}

export default Pqrs;
